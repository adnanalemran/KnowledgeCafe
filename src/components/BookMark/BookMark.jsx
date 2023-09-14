 

// eslint-disable-next-line react/prop-types
const BookMark = ({bookMarks}) => {
    console.log(bookMarks);
    const{title} =bookMarks;
    return (
        <div className="bg-slate-200 p-4 m-4 rounded-xl">
            <h3 className="text-2xl">{title}</h3>
        </div>
    );
};

export default BookMark;