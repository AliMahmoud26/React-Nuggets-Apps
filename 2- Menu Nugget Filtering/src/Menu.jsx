const Menu = ({items}) => {
  return (
    <div className="section-center">
        {
            items.map((item) => {
                const {id, title, price, img, desc} = item;
                return (
                    <article className='menu-item' key={id}>
                        <img src={img} alt={title} className='photo' />
                        <div className="items-info">
                            <header>
                                <h4>{title}</h4>
                                <h5 className="price">{price}</h5>
                            </header>
                            <p className="item-text">{desc}</p>
                        </div>
                    </article>
                )
            })
        }
    </div>
  )
}

export default Menu