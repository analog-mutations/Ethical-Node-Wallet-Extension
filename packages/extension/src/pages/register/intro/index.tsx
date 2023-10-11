import React, { FunctionComponent } from "react";
import { RegisterSceneBox } from "../components/register-scene-box";
import { Stack } from "../../../components/stack";
import { Button } from "../../../components/button";
import {
  useSceneEvents,
  useSceneTransition,
} from "../../../components/transition";
import { useRegisterHeader } from "../components/header";
import { YAxis } from "../../../components/axis";
import { Gutter } from "../../../components/gutter";
// import { TextButton } from "../../../components/button-text";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../stores";
import { useIntl } from "react-intl";
import {
  KeyIcon,
  // GoogleIcon,
  ArrowDownTrayIcon,
} from "../../../components/icon";
import { ColorPalette } from "../../../styles";
// import { Image } from "../../../components/image";
// import * as KeplrWalletPrivate from "keplr-wallet-private";
import { useTheme } from "styled-components";

export const RegisterIntroScene: FunctionComponent = observer(() => {
  const { uiConfigStore } = useStore();
  const sceneTransition = useSceneTransition();
  const intl = useIntl();
  const theme = useTheme();

  const header = useRegisterHeader();
  useSceneEvents({
    onWillVisible: () => {
      header.setHeader({
        mode: "intro",
      });
    },
  });

  return (
    <RegisterSceneBox>
      <YAxis alignX="center">
        {/* <video width="200" height="200" autoPlay={true} loop={true}>
          <source
            src={require("../../../public/assets/lottie/register/intro.webm")}
          />
        </video> */}
        <img
          src={require(theme.mode === "light"
            ? "../../../public/assets/img/intro-logo-light.png"
            : "../../../public/assets/img/intro-logo.png")}
          style={{
            height: `8rem`,
          }}
          alt="intro wallet image"
        />
      </YAxis>
      <Gutter size="3.125rem" />
      <Stack gutter="1.25rem">
        {/* <H3>--Sign up--</H3> */}
        <Button
              text={intl.formatMessage({
                id: "pages.register.intro-new-user.new-recovery-path-button",
              })}
              left={
                <KeyIcon
                  width="1rem"
                  height="1rem"
                  color={ColorPalette["gray-10"]}
                />
              }
              size="large"
              color="transparent"
              onClick={() => {
                sceneTransition.push("new-mnemonic");
              }}
            />
            {/* <Button
                text={intl.formatMessage({
                  id: "pages.register.intro-new-user.sign-up-google-button",
                })}
                size="large"
                color="transparent"
                left={<GoogleIcon />}
                onClick={() => {
                  if (KeplrWalletPrivate.onGoogleSignInClick) {
                    KeplrWalletPrivate.onGoogleSignInClick(sceneTransition);
                  } else {
                    alert(
                      intl.formatMessage({ id: "error.not-supported-error" })
                    );
                  }
                }}
              /> */}
                      {/* <Button
          color="transparent"
          text={intl.formatMessage({
            id: "pages.register.intro.create-wallet-button",
          })}
          size="large"
          onClick={() => {
            sceneTransition.push("new-user");
          }}
        /> */}
               {/* <H3>--Sign In--</H3> */}
        {/* <Button
          text={intl.formatMessage({
            id: "pages.register.intro.import-wallet-button",
          })}
          size="large"
          color="transparent"
          onClick={() => {
            sceneTransition.push("existing-user");
          }}
        /> */}
        <Button
              text={intl.formatMessage({
                id: "pages.register.intro-existing-user.recovery-button",
              })}
              size="large"
              color="transparent"
              left={<ArrowDownTrayIcon width="1rem" height="1rem" />}
              onClick={() => {
                sceneTransition.push("recover-mnemonic");
              }}
            />
          {/* <Button
                text={intl.formatMessage({
                  id: "pages.register.intro-existing-user.social-recovery-google-button",
                })}
                size="large"
                color="transparent"
                left={<GoogleIcon />}
                onClick={() => {
                  if (KeplrWalletPrivate.onGoogleSignInClick) {
                    KeplrWalletPrivate.onGoogleSignInClick(sceneTransition);
                  } else {
                    alert(
                      intl.formatMessage({ id: "error.not-supported-error" })
                    );
                  }
                }}
              /> */}

        
        {uiConfigStore.platform !== "firefox" ? (
          <>
          {/* <H3>--Connect with Hardware Wallet--</H3> */}
          {/* <TextButton
            text={intl.formatMessage({
              id: "pages.register.intro.connect-hardware-wallet-button",
            })}
            size="large"
            onClick={() => {
              sceneTransition.push("connect-hardware-wallet");
            }}
          /> */}
                  <Button
          text={intl.formatMessage({
            id: "pages.register.connect-hardware.connect-ledger-button",
          })}
          size="large"
          color="transparent"
          left={<LedgerIcon />}
          onClick={() => {
            sceneTransition.push("name-password-hardware", {
              type: "ledger",
            });
          }}
        />
        {/* <Button
          text={intl.formatMessage({
            id: "pages.register.connect-hardware.connect-keystone-button",
          })}
          size="large"
          color="transparent"
          left={
            <Image
              src={require(theme.mode === "light"
                ? "../../../public/assets/img/intro-keystone-logo-light.png"
                : "../../../public/assets/img/intro-keystone-logo.png")}
              alt={"intro-keystone-logo"}
              style={{
                width: "1.5rem",
                height: "1.5rem",
              }}
            />
          }
          onClick={() => {
            sceneTransition.push("name-password-hardware", {
              type: "keystone",
            });
          }}
        /> */}

          </>
        ) : null}
      </Stack>
    </RegisterSceneBox>
  );
});


const LedgerIcon: FunctionComponent = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_6023_318)">
        <path
          d="M21 20H14.1341V19.0323H20.0546V15.3964H21V20ZM9.86588 20H3V15.3964H3.94544V19.0323H9.86588V20ZM21 8.72578H20.0546V4.9677H14.1341V4H21V8.72578ZM3.94544 8.72578H3V4H9.86588V4.9677H3.94544V8.72578Z"
          fill="white"
        />
        <path
          d="M14.1341 14.9078H9.86591V8.36877H10.8205V13.9401H14.1341V14.9078Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_6023_318">
          <rect
            width="18"
            height="16"
            fill="white"
            transform="translate(3 4)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
