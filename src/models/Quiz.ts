import { Question } from "./Question";

export interface Quiz {
  id: string;
  name: string;
  questions: Question[];
}
