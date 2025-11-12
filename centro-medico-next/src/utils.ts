import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import DashboardIcon from "@mui/icons-material/Dashboard";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PersonalInjuryIcon from "@mui/icons-material/PersonalInjury";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import GroupIcon from "@mui/icons-material/Group";


export const turnos: CardTurnos[] = [
    {
        id: 1,
        logo: DomainVerificationIcon,
        value: "7",
        name: "Turnos del día",
        background: "#644fae",
    },
    {
        id: 2,
        logo: ScheduleIcon,
        value: "4",
        name: "En espera",
        background: "#f0ab74",
    },
    {
        id: 3,
        logo: PendingActionsIcon,
        value: "2",
        name: "Atendiendo",
        background: "#65e78c",
    },
    {
        id: 4,
        logo: CheckCircleIcon,
        value: "1",
        name: "Finalizados",
        background: "#56d1fe",
    },
    {
        id: 5,
        logo: GroupsIcon,
        value: "25",
        name: "Usuarios del Sistema",
        background: "#3b6c99",
    },
];



export const menu:Menu[]=[
    {id:1,name:"Dashboard",icon:DashboardIcon,link:"/dashboard"},
    {id:2,name:"Turnos",icon:DateRangeIcon,link:"/turnos"},
    {id:3,name:"Pacientes",icon:PeopleAltIcon,link:"/pacientes"},
    {id:4,name:"Médicos",icon:PersonalInjuryIcon,link:"/medicos"},
    {id:5,name:"Consultorios",icon:LocalHospitalIcon,link:"/consultorios"},
    {id:6,name:"Especialidades",icon:MedicalServicesIcon,link:"/especialidades"},

]



export const medicos:Medicos[]=[
    {
        id:1,
        user:{
            name:`Nombre1, Apellido`,
            email:"nombree@doctor.com"
        }
    },
     {
        id:2,
        user:{
            name:`Nombre2, Apellido`,
            email:"nombree@doctor.com"
        }
    },
     {
        id:3,
        user:{
            name:`Nombre3, Apellido`,
            email:"nombree@doctor.com"
        }
    }
]
export const pacientes:Pacientes[]=[
    {
        id:1,
        user:{
            name:`Nombre1, Apellido`,
            email:"nombree@doctor.com"
        }
    },
     {
        id:2,
        user:{
            name:`Nombre2, Apellido`,
            email:"nombree@doctor.com"
        }
    },
     {
        id:3,
        user:{
            name:`Nombre3, Apellido`,
            email:"nombree@doctor.com"
        }
    }
]

export const consultorios:Consultorios[]=[
    {id:1,name:"102"},
    {id:2,name:"103"},
    {id:3,name:"104"}
]


export const especialidades:Especialidades[]=[
    {id:1,name:"Medico General"},
    {id:2,name:"Cirujano"}
]

export interface Especialidades{
    id:number|string,
    name:string
}
export interface Consultorios{
    id:number|string,
    name:string
}

export interface Medicos{
    id:number | string,
    user:User
}

export interface Pacientes{
    id:number | string,
    user:User
}
export interface User{
    name:string,
    email:string
}

export interface Menu{
    id:number,
    name:string,
    icon:any,
    link:string
}


export interface CardTurnos {
  id: number;
  logo:any;
  value: string | number;
  name: string;
  background: string;
}



export interface columnsTurno{
    id:
    | "fecha"
    | "hora"
    | "paciente"
    | "medico"
    | "especialidad"
    | "consultorio"
    | "estado"
    | "acciones";
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left";
  format?: (value: number) => string;
  icon?: any;
  backgroundStatus?:string;
}


export interface columnsMedicos{
    id:
    | "name"
    | "email"
    | "id"
    | "acciones";
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left";
  format?: (value: number) => string;
  icon?: any;
  backgroundStatus?:string;
}
export interface columnsPacientes{
    id:
    | "name"
    | "email"
    | "id"
    | "acciones";
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left";
  format?: (value: number) => string;
  icon?: any;
  backgroundStatus?:string;
}
 export interface columnsConsultorios{
    id:
    | "name"
    | "id"
    | "acciones";
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left";
  format?: (value: number) => string;
  icon?: any;
}

export interface columnsEspecialidades{
    id:
    | "name"
    | "id"
    | "acciones";
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left";
  format?: (value: number) => string;
  icon?: any;
}


