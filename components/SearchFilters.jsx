import { useEffect, useState } from 'react';
import {useRouter} from "next/router";
import Image from 'next/image';
import { Flex, Box, Text, Icon, Select, Input, Spinner, Button } from '@chakra-ui/react';
import { MdCancel } from "react-icons/md";
import { filterData, getFilterValues } from "../utils/filterData";

const SearchFilters = () => {
    const [filters, setFilters] = useState(filterData);
    const router = useRouter();
    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const {query} = router;

        const values = getFilterValues(filterValues);

        values.forEach((item) => {
            query[item.name] = item.value;
        });

        router.push({pathname:path, query})
    };

    return (
        <Flex
            bg="grey.100" p="4"
            justifyContent="center"
            flexWrap="wrap"
        >
            {filters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select
                        w="fit-content"
                        p="2"
                        placeholder={filter.placeholder}
                        onChange={ (e) => searchProperties({ [filter.queryName]: e.target.value }) }
                    >
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    )
}

export default SearchFilters;