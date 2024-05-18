import React from "react";

const Menu = () => {
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "https://images.pexels.com/photos/1824541/pexels-photo-1824541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "https://images.pexels.com/photos/1824541/pexels-photo-1824541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "https://images.pexels.com/photos/1824541/pexels-photo-1824541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "https://images.pexels.com/photos/1824541/pexels-photo-1824541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        },
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "https://images.pexels.com/photos/1824541/pexels-photo-1824541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
    ]

    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {posts.map(post => (<div
                className="post"
                key={post.id}
            >
                <img src={post.img} alt=""/>
                <h2>{post.title}</h2>
                <button>Read more</button>
            </div>))}
        </div>
    )
}

export default Menu;