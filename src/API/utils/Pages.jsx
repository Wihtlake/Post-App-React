import React, { useMemo, useState } from 'react';

export const getPageCount = (totalCount, limit) =>{
    return Math.ceil(totalCount / limit);
}

