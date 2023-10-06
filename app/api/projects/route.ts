
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers"
import { ProjectProps } from "@/common/types/projects";
export const getProjects = async () => {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore })
    const { data, error } = await supabase.from("projects").select('*');
    if (error) {
        console.log(error)
        return null;
    }
    const projects: ProjectProps[] = data;
    return projects;
};