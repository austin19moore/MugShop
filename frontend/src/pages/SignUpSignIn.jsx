// File that will have the regristration and sign in
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../redux/apiFetch.js";
import {Container, Image, Line, LeftContainer, RightContainer, Wrapper, Title, Form, Input, Button, Error} from "../styles/SignUpSignIn.styles.jsx";
import { useState } from "react";

const SignUpSignIn = () => {
    // This is for the register account state
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // Grabs user and sets user
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user);
    const {isFetchingReg, error2} = useSelector((state) => state.user);
    const [passwordMatchError, setPasswordMatchError] = useState(false);

    // Registers user to redux state
    const handleRegister = (e) => {
        e.preventDefault();
        if (!passwordMatchError) {
            register(dispatch, {username, email, password})
        }
    }
    // Sets the login of user to redux
    const handleSignIn = (e) => {
        e.preventDefault();
        login(dispatch, {username, password})
    }

    const handleConfirmPassword = (text) => {

        // handle confirmpassword
        if (password != text) {
            setPasswordMatchError(true);
        } 

        if (password == text) {
            setPasswordMatchError(false);
        }
    };

    return (
        <Container>
            <Wrapper>
                <LeftContainer>
                    <Title>Create an Account</Title>
                    <Form>
                        <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                        <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        <Input placeholder="Confirm Password" type="password" onChange={(e) => handleConfirmPassword(e.target.value)}/>
                        {passwordMatchError && <Error>Passwords do not match</Error>}
                        {error2 && <Error>Error has occurred</Error>}
                        <Button onClick={handleRegister} disabled={isFetchingReg}>Create Account</Button>
                    </Form>
                </LeftContainer>
            </Wrapper>
            <Line style={{opacity: "0%"}}>:</Line>
            
            <Wrapper>
            <RightContainer>
                    <Title>Already have an account?</Title>
                    <Form>
                        <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                        <Input inputStyle={{color: 'black'}} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                        {error && <Error>Error has occurred</Error>}
                        <Button onClick={handleSignIn} disabled={isFetching}>Sign In</Button>
                    </Form>
                </RightContainer>
            </Wrapper>
        </Container>
    )
}

export default SignUpSignIn