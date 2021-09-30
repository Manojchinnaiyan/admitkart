import React, { useState } from "react"
import { Grid, Typography, Button } from "@material-ui/core"
import { useHistory, useHistroy } from "react-router"
import { Link } from "react-router-dom"
import OtpInput from "react-otp-input"

const OtpPage = () => {
  const [otp, setOtp] = useState("")
  const history = useHistory()
  const handleChange = (e) => {
    e.preventDefault()
    setOtp(otp)
    history.push("/home")
  }
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
          height: "640px",
          backgroundColor: "white",
        }}
      >
        <img
          src='/mailverify.svg'
          alt='verify img'
          style={{ height: "300px", width: "300px", backgroundSize: "cover" }}
        ></img>
        <Typography as='h6'>Please verify Mobile Number</Typography>
        <Typography as='p' style={{ marginTop: "20px", color: "grey" }}>
          An Otp is send to number
        </Typography>
        <a
          href='/'
          style={{
            color: "#FCCF31",
            fontSize: "10px",
            textDecorationLine: "underline",
          }}
        >
          Change Mobile Number
        </a>
        <OtpInput
          inputStyle={{
            width: "3rem",
            height: "3rem",
            margin: "0 1rem",
            fontSize: "2rem",
            color: "#FCCF31",
            borderRadius: 4,
            border: "2px solid white",
            boxShadow: "3px 3px 2px grey",
            marginTop: "20px",
          }}
          value={otp}
          onChange={setOtp}
          numInputs={4}
          shouldAutoFocus={true}
          focusStyle={{
            border: "1px solid #FCCF31",
            outline: "none",
          }}
        />
        <Typography as='p' style={{ color: "grey", marginTop: "30px" }}>
          Didn't receive the code?
          <a href='/' style={{ color: "#FCCF31" }}>
            Resend
          </a>
        </Typography>
        <Link to='/home'>
          <Button
            onClick={handleChange}
            style={{
              backgroundColor: "#FCCF31",
              marginTop: "30px",
              padding: "10px",
              width: "250px",
              borderRadius: "30px",
            }}
          >
            Verify
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

export default OtpPage
