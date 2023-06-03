import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { Api } from "./Api/firebase_service";

const ProfileContext = createContext()

const ProfileProvider = ({children})=>{
    const [skills, setSkills] = useState([]);
    const [projects, setProjects] = useState([]);
    const [services, setServices] = useState([]);

    useEffect(()=>{
        getService();
        getProjects();
        getSkills();
    },[])

    async function getService(){
        const res = await Api.getSevices();
        setServices(res);
    }

    async function getProjects(){
        const res = await Api.getProjects();
        setProjects(res);
    }

    async function getSkills(){
        const res = await Api.getSkills();
        setSkills(res);
    }

    return (
    <ProfileContext.Provider 
    value={{
        services,
        projects,
        skills
    }}>
        {children}
    </ProfileContext.Provider>
    )
}

export const useGlobalContext = ()=>useContext(ProfileContext)

export {ProfileContext, ProfileProvider}
