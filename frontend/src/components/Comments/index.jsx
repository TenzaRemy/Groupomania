import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Comments = (props) => {
    const params = useParams();
    const [content, setContent] = useState("");
    const handleComments = (e) => {
        e.preventDefault();

        if (content === "") {
            alert("Le commentaire est vide ")
        } else {
            axios.post(`http://localhost:5000/api/comment/` + params.id, {
                content,
            }).then (() => {
                props.commentaire()
            })
        }
    };
    return (
        <div>
            <form action='' onSubmit={handleComments } id="form-comment">
                    <textarea
                    name="content"
                    id="content"
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                  <input type="submit" value="Envoyer"></input>
                </form>
            
        </div>
    );
};

export default Comments;