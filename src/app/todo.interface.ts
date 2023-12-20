export interface Todo {
  name: string;
  priority: 'low' | 'medium' | 'high';
  dueDate?: Date;
  category?: string;
}
