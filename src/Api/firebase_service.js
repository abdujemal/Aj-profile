import { initializeApp } from 'firebase/app'
import { getFirestore, getDocs, collection } from 'firebase/firestore'
import { firebaseConfig } from './firebase_config'

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export const Api = {
    getSkills: async ()=>{
        const skills = await getDocs(collection(db, 'skills'));
        const skillList = [];

        skills.forEach((doc)=>{
            skillList.push(doc.data())
        })

        console.log(skillList);
        return skillList
    },
    getProjects: async ()=>{
        const projects = await getDocs(collection(db, 'projects'));
        const projectList = []

        projects.forEach((doc)=>{
            projectList.push(doc.data());
        })

        console.log(projectList);
        return projectList
    },
    getSevices: async ()=>{
        const services = await getDocs(collection(db, 'sevices'));
        const serviceList = []

        services.forEach((doc)=>{
            serviceList.push(doc.data());
        })

        console.log(serviceList);
        return serviceList
    },

}