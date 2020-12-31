import { Grid, TextField } from "@material-ui/core";
import { Controller, useFormContext } from "react-hook-form";

export const CustomInput = ({ name, label }) => {

    const { control } = useFormContext();

    return (
        <Grid item xs={12} sm={6}>
            <Controller as={ TextField } control={ control } name={ name } label={ label } required fullwidth />
        </Grid>
    );

};
