import React from "react"
import { Grid, Typography, Button } from "@material-ui/core"

const HomePage = () => {
  return (
    <Grid
      container
      justify='center'
      direction='column'
      alignItems='center'
      style={{ minHeight: "100vh" }}
    >
      <Grid
        item
        container
        direction='column'
        alignItems='center'
        style={{
          width: "400px",
          height: "650px",
          backgroundColor: "white",
        }}
      >
        <img
          src='/d.png'
          alt='homepage'
          style={{
            height: "210px",
            width: "200px",
            backgroundSize: "cover",
            justifyContent: "center",
            marginTop: "50px",
          }}
        />
        <Typography as='h1' style={{ fontSize: "25px", color: "orange" }}>
          Welcome to
        </Typography>
        <img
          src='/img.png'
          alt='admit'
          style={{
            height: "50px",
            width: "200px",
            backgroundSize: "cover",
            justifyContent: "center",
            marginTop: "10px",
          }}
        />
        <Typography style={{ color: "grey", marginTop: "10px" }}>
          In order to provide you with a customer experience
        </Typography>
        <Typography>We need to ask you few questions</Typography>
        <Button
          style={{
            backgroundColor: "#FCCF31",
            marginTop: "100px",
            padding: "10px",
            width: "200px",
            borderRadius: "30px",
          }}
        >
          Get Started
        </Button>
        <Typography style={{ color: "grey", fontSize: "10px" }}>
          This will only for 5 min
        </Typography>
      </Grid>
    </Grid>
  )
}

export default HomePage
