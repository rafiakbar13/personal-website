import supabase from "@/provider/SupabaseProvider";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"
export const getProjects = async () => {
    const supabase = createServerComponentClient({ cookies })
    const { data, error } = await supabase.from("projects").select('*');
    if (error) {
        console.log(error)
    }
    return (data as any) || [];
};