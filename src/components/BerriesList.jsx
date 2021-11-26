const BerriesList = ({berries}) => {

return (
    <>
    {
        berries.map((berry) => (
            <div className="berrie" key={berry.id}>
              <h2>{berry.name}</h2>
              <p>
                power :<small>{'' + berry.natural_gift_power}</small>
              </p>
              <h3>flavor : </h3>
              <em>{berry.flavors[0].flavor.name}</em>
              <em>{berry.flavors[1].flavor.name}</em>
              <em>{berry.flavors[2].flavor.name}</em>
              <em>{berry.flavors[3].flavor.name}</em>
              <h3>natural type : </h3>
              <p>{berry.natural_gift_type.name} </p>
            </div>
          ))
    }
    </>
)



}


export default BerriesList;