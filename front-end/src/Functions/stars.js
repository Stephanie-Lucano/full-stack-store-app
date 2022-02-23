export default function Stars(price) {
    let star = ""
    switch (price) {
        case 1: 
            star = "🌟";
            break;
        case 2: 
            star = "🌟🌟";
            break;
        case 3: 
            star = "🌟🌟🌟";
            break;
        case 4: 
            star = "🌟🌟🌟🌟";
            break;
        case 5: 
            star = "🌟🌟🌟🌟🌟"
            break;
        default: 
            console.log("Error")
    }

    return (
        <>
            {star}
        </>
    )
};