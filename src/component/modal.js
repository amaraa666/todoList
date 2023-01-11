


export default function Modal({modal , myModal, list , myVal , drawList , setList }){
    const bg = modal ? 'block' : 'none';
    function modalAdd(){
        drawList();
        myModal();
    }
    function mySave(){
        drawList();
        myModal();
    }
    return(
        <>
        <div className="modal w-100 h-100" style={{display: bg}} onClick={myModal}>
            <div className="container-fluid d-flex justify-content-center position-fixed top-0" onClick={(e)=>e.stopPropagation()}>
                <div className="col-4 d-flex flex-column align-items-center bg-secondary p-3">
                    <div className="modalHeader p-2 border-bottom">
                        <h1 className="m-0 text-center">To do list</h1>
                    </div>
                    <div className="modalBody pt-2">
                        <div className='myInputSection m-0 d-flex justify-content-center'>
                          <input type='text' placeholder='Add ur task' value={list} onChange={(e)=>setList(e.target.value)}/>
                          <input type='hidden' value={myVal}/>
                          <button onClick={modalAdd} className='bg-dark text-white btn'>add+</button>
                        </div>
                    </div>
                    <div className="modalFooter pt-2 d-flex gap-2 justify-content-center">
                        <button className="bg-secondary text-white" onClick={myModal}>Close</button>
                        <button className="bg-primary text-white" onClick={mySave}>Save</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}