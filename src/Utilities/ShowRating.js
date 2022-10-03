import React from "react";
import { VscStarFull, VscStarEmpty, VscStarHalf } from "react-icons/vsc";

const ShowRating = ({ ratings }) => {
    if (ratings === 1) {
        return (
            <>
                <VscStarFull />
                <VscStarEmpty />
                <VscStarEmpty />
                <VscStarEmpty />
                <VscStarEmpty />
            </>
        );
    } else if (ratings === 2) {
        return (
            <>
                <VscStarFull />
                <VscStarFull />
                <VscStarEmpty />
                <VscStarEmpty />
                <VscStarEmpty />
            </>
        );
    } else if (ratings === 2.5) {
        return (
            <>
                <VscStarFull />
                <VscStarFull />
                <VscStarHalf />
                <VscStarEmpty />
                <VscStarEmpty />
            </>
        );
    } else if (ratings === 3) {
        return (
            <>
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarEmpty />
                <VscStarEmpty />
            </>
        );
    } else if (ratings === 3.5) {
        return (
            <>
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarHalf />
                <VscStarEmpty />
            </>
        );
    } else if (ratings === 4) {
        return (
            <>
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarEmpty />
            </>
        );
    } else if (ratings === 4.5) {
        return (
            <>
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarHalf />
            </>
        );
    } else {
        return (
            <>
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
                <VscStarFull />
            </>
        );
    }
};
export default ShowRating;
