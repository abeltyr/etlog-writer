'use client';

import React, { useEffect } from 'react';

export const AdsComponent = (props: any) => {
    const { dataAdSlot } = props;

    useEffect(() => {

        try {
            if (window != null) {
                const dataCollator: any = window;
                (dataCollator.adsbygoogle = dataCollator.adsbygoogle || []).push({});
            }
        }
        catch (e) {

        }
    }, []);



    return (
        <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client={process.env.NEXT_PUBLIC_GOOGLE_AD}
            data-ad-slot={dataAdSlot}
            data-ad-format="auto"
            data-adbreak-test="on"
            data-full-width-responsive="true">
        </ins>
    );
};
