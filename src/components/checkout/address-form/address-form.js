import { Input, InputLabel, Select, MenuItem, Grid, Typography, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { CustomInput } from "../custom-textfield/custom-input";
import { commerce } from "../../../lib/commerce";

export const AddressForm = ({ checkoutToken }) => {

    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('');
    const [regions, setRegions] = useState([]);
    const [region, setRegion] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState([]);

    const fetchCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
        setCountries(countries);
        setCountry(Object.keys(countries)[0]);
    };

    const fetchRegions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
        setRegions(subdivisions);
        setRegion(Object.keys(regions)[0]);
    };

    const fetchShippingOptions = async (checkoutTokenId, country, region=null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });
        setShippingOptions(options);
        setShippingOption(options[0]['id']);
    };

    const methods = useForm();

    useEffect(() => fetchCountries(checkoutToken?.id), []);

    useEffect(() => {
        if(country) {
            fetchRegions(country);
        }
    }, [country]);

    useEffect(() => {
        if(region) {
            fetchShippingOptions(checkoutToken.id, country, region);
        }
    }, [country]);

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider { ...methods }>
                <form onSubmit={``}>
                    <Grid container spacing={3}>
                        <CustomInput name="fullName" label="Full name" />
                        <CustomInput name="address" label="Address" />
                        <CustomInput name="email" label="Email" />
                        <CustomInput name="city" label="City" />
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Country</InputLabel>
                            <Select value={ country } onChange={ event => setCountry(event.target.value) } fullWidth>
                                {
                                    Object.entries(countries).map(([code, name]) => ({ id: code, label: name }))
                                        .map(thingy => (
                                            <MenuItem key={thingy.id} value={thingy.label}>
                                                { thingy.label }
                                            </MenuItem>
                                        ))
                                }
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Region</InputLabel>
                            <Select value={region} onChange={ event => setRegion(event.target.value) } fullWidth>
                                {
                                    Object.entries(regions).map(([code, name]) => ({ id: code, label: name }))
                                        .map(thingy => (
                                            <MenuItem key={thingy.id} value={thingy.label}>
                                                { thingy.label }
                                            </MenuItem>
                                        ))
                                }
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Options</InputLabel>
                            <Select value={shippingOption} onChange={ event => setShippingOption(event.target.value) } fullWidth>
                                {
                                    regions.length> 0 && regions.map(reg => ({ id: reg.id, label: `${reg.description} - (${reg.price.formatted_with_symbol})` }))
                                        .map( thingy => (
                                            <MenuItem key={thingy.id} value={thingy.id}>
                                                { thingy.label }
                                            </MenuItem>
                                        ))
                                }
                            </Select>
                        </Grid>
                    </Grid>
                </form>
            </FormProvider>
        </>
    );

};
