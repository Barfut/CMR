const DatosVendedor = () => {
    return (

        <div>
            <form className="row gy-2 gx-3 align-items-center">
                <div className="row g-3">
                    <div className="col-sm">
                        <input type="number" className="form-control" placeholder="# C.C. cliente" aria-label="Documento" />
                    </div>
                    
                    <div className="col-sm-7">
                      <input type="text" className="form-control" placeholder="Nombre cliente" aria-label="Nombre" />
                    </div>
                    
                    <div className="col-sm">
                      <input type="date" className="form-control text-muted" />
                    </div>

                </div>
            </form>
        </div>


    );
}

export default DatosVendedor;