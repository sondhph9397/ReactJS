import React from 'react'

function Pagination({ page, onPageChange, totalProduct, limit }) {
    const totalPages = Math.ceil(totalProduct / limit);

    return (
        <div>
            <button
                className="border px-4 py-3 mr-10 my-3"
                disabled={page <= 1}
                onClick={() => onPageChange(page - 1)}
            >
                <img src="../images/prev.png" alt="" className="h-3 " />
            </button>
            <button className="border px-4 py-2" >1</button>
            <button className="border px-4 py-2 mx-10">2</button>
            <button className="border px-4 py-2 mr-10">3</button>
            <button
                className="border px-4 py-3"
                disabled={page >= totalPages}
                onClick={() => onPageChange(page + 1)}
            >
                <img src="../images/next.png" alt="" className="h-3" />
            </button>
        </div>
    );
}

export default Pagination;
