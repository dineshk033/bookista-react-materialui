import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import { BooklistData } from 'mock/data';
import CardBookListView from '../card/cardBookListView';

const TOTALRECORDS = 3;
export default () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [fullData, setFullData] = useState([]);

    function paginate(array, pageSize, pageNumber) {
        return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }

    useEffect(() => {
        const temp = BooklistData(100);
        setFullData(temp);
    }, []);
    useEffect(() => {
        setData(paginate(fullData, TOTALRECORDS, page));
    }, [page, fullData]);

    const TOTALPAGE = Math.ceil(fullData.length / TOTALRECORDS);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <>
            {data.map((el) => (
                <CardBookListView {...el} key={el.title} />
            ))}
            <Pagination
                sx={{ '& .MuiPagination-ul': { justifyContent: 'center' }, mb: 2 }}
                color="secondary"
                count={TOTALPAGE}
                variant="text"
                shape="rounded"
                onChange={handleChange}
            />
        </>
    );
};
