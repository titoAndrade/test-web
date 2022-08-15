import dataBase from '../data-mock.json'

const Member1 = () => {
  return(
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-10' id='content'>
          <div className='row' id='title'>
            <div className='col' id='member'><h1>Member</h1></div>
            <div className='col' id='role'><h1>Role</h1></div>
            <div className='col' id='availability'><h1>Projects Availability</h1></div>
          </div>
            {dataBase.map( data => {
                return (
                  <div key={data.id} id='cards'>
                    <div className='col'>
                      <img src={ data.profilePhoto } alt="" />
                    </div>
                    <div className='col'>
                      <h1>{ data.name }</h1>
                    </div>
                    <div className='col'>
                      <h3>{ data.role }</h3>
                    </div>
                    <div className='col'>
                      <p>
                        { data.availability[0] } <br/>
                        { data.availability[1] } <br/>
                        { data.availability[2] }
                      </p>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </div>
      
    </div>
  )
};

export default Member1