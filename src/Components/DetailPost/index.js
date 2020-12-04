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
            <div class="bg-gray-300 shadow overflow-hidden py-10">
                <div class="w-4/6 mx-auto ">
                    <div class="px-4 py-5 px-6">
                        <h1 class="text-lg leading-6 font-medium text-gray-900 text-4xl py-5">
                            {post.title}
                        </h1>
                        <h5>{post.published_at}</h5>
                    </div>
                    <div class="border-t border-gray-200">
                        <dl>
                            <div class="bg-gray-50 px-4 py-5 grid grid-cols-1 gap-4 px-6">
                                <dt class="text-sm font-normal text-xl font-sans leading-tight text-gray-500">
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
