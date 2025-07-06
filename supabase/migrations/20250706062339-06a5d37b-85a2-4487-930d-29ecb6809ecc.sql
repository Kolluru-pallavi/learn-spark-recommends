-- Create courses table to store learning content
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL CHECK (type IN ('Video', 'Article', 'Course', 'Tutorial', 'Book')),
  skill_level TEXT NOT NULL CHECK (skill_level IN ('Beginner', 'Intermediate', 'Advanced')),
  duration TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  external_id INTEGER, -- reference to original content id
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_progress table to track course completion
CREATE TABLE public.user_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  status TEXT NOT NULL CHECK (status IN ('not_started', 'in_progress', 'completed')) DEFAULT 'not_started',
  progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  started_at TIMESTAMP WITH TIME ZONE,
  completed_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, course_id)
);

-- Enable Row Level Security
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Create policies for courses (public read access)
CREATE POLICY "Anyone can view courses" 
ON public.courses 
FOR SELECT 
USING (true);

-- Create policies for user_progress (user-specific access)
CREATE POLICY "Users can view their own progress" 
ON public.user_progress 
FOR SELECT 
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own progress" 
ON public.user_progress 
FOR INSERT 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress" 
ON public.user_progress 
FOR UPDATE 
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own progress" 
ON public.user_progress 
FOR DELETE 
USING (auth.uid() = user_id);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_courses_updated_at
BEFORE UPDATE ON public.courses
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_user_progress_updated_at
BEFORE UPDATE ON public.user_progress
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample courses from learning content data
INSERT INTO public.courses (title, description, type, skill_level, duration, tags, external_id) VALUES
('Python for Beginners - Complete Course', 'Learn Python programming from scratch with hands-on exercises and projects.', 'Course', 'Beginner', '6 hours', '{Python,Programming,Basics,Fundamentals}', 1),
('Introduction to Machine Learning', 'Comprehensive introduction to machine learning concepts and algorithms.', 'Course', 'Intermediate', '8 hours', '{Machine Learning,AI,Data Science,Python}', 2),
('React Hooks Deep Dive', 'Master React hooks with practical examples and best practices.', 'Article', 'Intermediate', '15 minutes', '{React,JavaScript,Frontend,Hooks}', 3),
('Advanced Python Data Structures', 'Explore advanced Python data structures and their applications.', 'Video', 'Advanced', '45 minutes', '{Python,Data Structures,Algorithms,Advanced}', 4),
('CSS Grid Layout Mastery', 'Master CSS Grid layout with practical examples and exercises.', 'Tutorial', 'Intermediate', '30 minutes', '{CSS,Frontend,Layout,Design}', 5);