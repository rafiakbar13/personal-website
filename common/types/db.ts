export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      projects: {
        Row: {
          created_at: string
          id: number
          image: string | ''
          link_demo: string | ''
          link_github: string | ''
          slug: string | ''
          title: string | ''
        }
        Insert: {
          created_at?: string
          id?: number
          image?: string | ''
          link_demo?: string | ''
          link_github?: string | ''
          slug?: string | ''
          title?: string | ''
        }
        Update: {
          created_at?: string
          id?: number
          image?: string | ''
          link_demo?: string | ''
          link_github?: string | ''
          slug?: string | ''
          title?: string | ''
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
