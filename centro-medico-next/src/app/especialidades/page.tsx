import axios from "axios"
import Header from "./_header/page"
import EspecialidadTable from "./_table/page"

export default  async function Especialidades(){
    const response= await getAllEspecialidades();
    return(
        <>
        <Header/>
        <EspecialidadTable responseData={response.offices}/>
        </>
    )
    
}

const getAllEspecialidades=async ()=>{
    try {
        const response = await axios.get('http://localhost:3010/api/offices');
        return response.data;
    } catch (error) {
        return error;
    }
}
