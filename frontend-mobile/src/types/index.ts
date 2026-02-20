/**
 * Definições de tipos e interfaces TypeScript
 * Centraliza todas as tipagens da aplicação
 */

// Interface principal da tarefa
export interface Task {
  id: number;
  //identificador
  title: string;
  //titulo
  description: string;
  //descrição
  completed: boolean;
  //completado boolean- verdadeiro ou falso
  createdAt?: string;
  //o ponto de interrogação significa que é opcional
  updatedAt?: string;
}

// Dados do formulário de criação de tarefas
export interface TaskFormData {
  title: string;
  description: string;
}

// Props do componente de formulário
export interface TaskFormProps {
  form: TaskFormData;
  onSubmit: () => void | Promise<void>;
  onChange: (field: string, value: string) => void;
  //onChange - na operação ; field- campo do string ;  valeu- valor do string
  submitting?: boolean;
  editingTaskId?: number | null;
   | significa OR ou um número ou outro
  onCancelEdit?: () => void;
  // guarda o valor/msg da ultima msg ; () ele guarda as ultimas informações
}

// Props do componente de lista de tarefas
export interface TaskListProps {
  tasks: Task[];
  loading: boolean;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

// Props do componente individual de tarefa
export interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

// Props do cabeçalho da lista
export interface ListHeaderProps {
  tasksCount: number;
  completedCount: number;
}

// Props do estado vazio da lista
export interface ListEmptyProps {
  title?: string; // Optional custom title
  description?: string;
}

// Props do componente de erro
export interface ErrorMessageProps {
  error: string;
}

export interface UseTasksReturn {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  submitting: boolean;
  createTask: (taskData: TaskFormData) => Promise<boolean>;
  updateTask: (id: number, taskData: TaskFormData) => Promise<boolean>;
  toggleTask: (id: number) => Promise<void>;
  deleteTask: (id: number) => Promise<void>;
  fetchTasks: () => Promise<void>;
}

// Mensagens da aplicação
export interface Messages {
  LOADING: string;
  EMPTY_TITLE: string;
  EMPTY_DESCRIPTION: string;
  ERROR_LOAD: string;
  ERROR_CREATE: string;
  ERROR_UPDATE: string;
  ERROR_DELETE: string;
  ERROR_EMPTY_TITLE: string;
  ERROR_CONNECTION: string;
}

