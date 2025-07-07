import React from 'react';

function Card({ Title, img, description, githubLink, demoLink }) {
    return (
        <div className="card bg-base-100 min-h-full w-96 shadow-sm flex flex-col justify-center items-center flex-wrap 
            transition-transform duration-300 ease-in hover:shadow-xl hover:scale-105">
            <figure>
                <img className='w-full cursor-pointer' src={img} alt={Title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{Title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-center items-center">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                        GitHub
                    </a>
                    <a href={demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full">
                        Demo
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
