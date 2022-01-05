import React, { useState, useEffect } from "react";
import {
  projectAuth,
  projectStorage,
  projectFirestore,
} from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [isCanclled, setIsCanclled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (
    email,
    password,
    name,
    phone,
    subBrokershipArea,
    address,
    pan,
    adhar,
    termAndCondition
  ) => {
    setError(null);
    setIsPending(true);
    try {
      // signup user
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(res.user);

      if (!res) {
        throw new Error("Could not complete signup");
      }

      // upload user thumbnail
      // const uploadPath = `thumbnails/${res.user.uid}/${thumbnail}`;
      // const img = await projectStorage.ref(uploadPath).put(thumbnail);
      // const imgUrl = await img.ref.getDownloadURL();

      // add display name to user
      await res.user.updateProfile({ displayName: name });

      // create a user document
      await projectFirestore.collection("users").doc(res.user.uid).set({
        online: true,
        displayName: name,
        phone: phone,
        subBrokershipArea: subBrokershipArea,
        address: address,
        pan: pan,
        adhar: adhar,
        termAndCondition: termAndCondition,
      });

      //   dispatch login action
      dispatch({
        type: "LOGIN",
        payload: res.user,
      });
      // update state
      if (!isCanclled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error) {
      if (!isCanclled) {
        console.log(error.message);
        setError(error.message);
        setIsPending(false);
      }
    }
  };
  useEffect(() => {
    return () => setIsCanclled(true);
  }, []);

  return { error, isPending, signup };
};
