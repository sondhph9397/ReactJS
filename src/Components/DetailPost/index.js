import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

function DetailPost() {
    const [post, setPost] = useState({});
    let {id} = useParams();
    console.log(id);
    const API_POST = "http://localhost:1337/posts";
    useEffect(() => {
        fetch(`${API_POST}/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data));
    }, []);
    return (
        <div id="main">
            <div class="bg-white shadow overflow-hidden py-10">
                <div class="w-4/6 mx-auto ">
                    <div class="px-4 py-5 px-6">
                        <h1 class="text-lg leading-6 font-medium text-gray-900 text-center">
                            {post.title}
                        </h1>
                        <div className="mx-auto mt-3 w-56">
                        <img src={post.image ? `http://localhost:1337${post.image.map((item) => {return item.url;})}`: "null"}/>
                        </div>
                    </div>
                    <div class="border-t border-gray-200">
                        <dl>
                            <div class="bg-gray-50 px-4 py-5 grid grid-cols-1 gap-4 px-6">
                                <dt class="text-sm font-medium text-gray-500">
                                    {post.description}
                                </dt>
                                <dt class="text-sm font-medium text-gray-500">
                                </dt>
                            </div>

                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPost
