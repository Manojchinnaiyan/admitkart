import React, { useState } from "react"
import { useHistory } from "react-router"
import { Grid, Typography, Button } from "@material-ui/core"
import PhoneInput from "react-phone-number-input"
import "react-phone-number-input/style.css"
import { Link } from "react-router-dom"

const MobileNumber = () => {
  const history = useHistory()
  const [value, setValue] = useState("")
  const handleChange = (e) => {
    e.preventDefault()
    setValue(value)
    history.push("/otp")
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
          height: "650px",
          backgroundColor: "white",
        }}
      >
        <img
          src='/img.png'
          alt='admitKart'
          style={{
            height: "50px",
            width: "200px",
            backgroundSize: "cover",
            justifyContent: "center",
            marginTop: "100px",
          }}
        ></img>
        <Typography variant='h5' style={{ marginTop: "100px" }}>
          Welcome Back
        </Typography>
        <Typography
          variant='p'
          style={{ marginTop: "10px", wordSpacing: "3px" }}
        >
          Please sign in to your account
        </Typography>

        <PhoneInput
          className='ui input'
          style={{
            marginTop: "15px",
            border: "2px solid #FCCF31",
            padding: "15px",
            width: "250px",
            height: "48px",
            borderRadius: "10px",
          }}
          defaultCountry='IN'
          placeholder='Enter mobile number'
          value={value}
          onChange={setValue}
        />
        <Typography variant='p' style={{ marginTop: "20px", color: "grey" }}>
          We will send you a one time SMS message
        </Typography>
        <Typography variant='p' style={{ color: "grey" }}>
          Charges may apply
        </Typography>

        <Button
          onClick={handleChange}
          style={{
            backgroundColor: "#FCCF31",
            marginTop: "100px",
            padding: "10px",
            width: "250px",
            borderRadius: "30px",
          }}
        >
          Sign In with OTP
        </Button>
      </Grid>
    </Grid>
  )
}

export default MobileNumber
