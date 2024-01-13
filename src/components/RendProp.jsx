
const tahoe_peaks = [
    {name:'Freel', elevation:10881},
    {name:'Monument', elevation:10331},
    {name:'Pyramid', elevation:99544},
    {name:'Tallac', elevation:9734}
]

function List ({data, renderItem, renderEmpty}) {
    return !data.length ? (
        renderEmpty
    ) : (
        <ul>
            {data.map((item) => (
                <li key={item.name}>
                    {renderItem(item)}
                </li>
            ))}
        </ul>
    )
}



function Rends () {
    return (
        <div className="rendsprops">
            <List
            data={tahoe_peaks}
            renderEmpty={<p>This list is empty</p>}
            renderItem={(item) => (
                <>
                    {item.name} - {item.elevation} ft.
                </>
            )}
            />

        </div>
    )
}

export default Rends;