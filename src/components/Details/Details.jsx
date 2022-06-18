import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
const Details = () => {
  return (
    <Card>
      <CardHeader title="Income">
        <Typography variant="h6">$50</Typography>
        <Doughnut data="DATA" />
      </CardHeader>
    </Card>
  );
};

export default Details;
