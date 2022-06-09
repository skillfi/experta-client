import React, {useState, useEffect} from "react";
import PostForm from "../PostForm";
import Server from '../../API/Server';
import { useFetching } from "../../hooks/useFetching";
import MyModal from "../MyModal/MyModal";
import MyButton from "../MyButton/MyButton";
import FactsElement from "../Facts/FactElement";

function ViewFacts(){
    const [facts, setFacts] = useState([])
    const [fetchFacts] = useFetching(async()=> {
        const response = await Server.getAll();
        setFacts(response.data.data)
        // console.log(response)
    })
    const [modal, setModal] = useState(false);

    useEffect(()=>{
        fetchFacts()
        
        return()=>{
            
        }
    }, [])

    return (
        <div>
            <MyButton onClick={()=> setModal(true)}>
                Створити факт
            </MyButton>
            <FactsElement data={facts}/>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm/>
            </MyModal>
            
        </div>
    )
}

export default ViewFacts;