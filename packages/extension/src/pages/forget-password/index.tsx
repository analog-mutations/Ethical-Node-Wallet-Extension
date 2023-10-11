import React, { FunctionComponent } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { useNavigate } from 'react-router'
import { HeaderLayout } from '../../layouts/header';
import { BackButton } from '../../layouts/header/components';
import { Box } from '../../components/box';
import { Subtitle1, Subtitle2, Subtitle3 } from '../../components/typography';
import { useTheme } from 'styled-components';
import { ColorPalette } from '../../styles';
import { Stack } from '../../components/stack';
import { YAxis } from '../../components/axis';
const ForgetPassword: FunctionComponent = () => {

  const intl = useIntl();
  const navigate = useNavigate()
  const theme = useTheme()

  return (
    <HeaderLayout
      isNotReady={false}
      left={<BackButton />}
      title={intl.formatMessage({
        id: "page.forget.password.title"
      })}
      bottomButton={{
        color: "secondary",
        text: intl.formatMessage({
          id: "button.close",
        }),
        size: "large",
        type: "button",
        onClick: () => {
          navigate("/", {
            replace: true,
          });
        },
      }}
    >
      <Box
        paddingX="1.75rem"
        paddingY="1.25rem"
        backgroundColor={
          theme.mode === "light"
            ? ColorPalette.white
            : ColorPalette["dark-bg-gradient"]
        }
        borderRadius="0.5rem"
        minHeight="10.25rem"
        style={{
          border:
            theme.mode === "light"
              ? `1px solid ${ColorPalette["gray-100"]}`
              : "none",
          textAlign: "center",
        }}
      >
        <Subtitle1
          color={
            theme.mode === "light"
              ? ColorPalette["gray-400"]
              : ColorPalette["orange-400"]
          }
          style={{
            marginBottom: "20px",
            lineHeight: "1.4",
            fontWeight: "bold",
            textAlign:"left",
          }}
        >
          <FormattedMessage id='page.forget.password.instruction' />
        </Subtitle1>
        <Stack>
          <YAxis alignX='left'>
            <Subtitle2 style={{
              marginBottom: "5px",
              fontWeight: "bold",
              textAlign: "left"
            }}> 
              <FormattedMessage id='page.forget.password.standard-procedure-title' />
            </Subtitle2>
            <Subtitle3 style={{marginLeft:`1rem`, textAlign: "justify", lineHeight: "1.5", fontWeight: 300 }}>
              <FormattedMessage id='page.forget.password.standard-procedure-para' />
            </Subtitle3>
          </YAxis>
          <YAxis alignX='left'>
            <Subtitle2 style={{
              marginTop: "20px",
              marginBottom: "5px",
              fontWeight: "bold",
              textAlign: "left"
            }}>
              <FormattedMessage id='page.forget.password.ledger-hardware-wallet-title' />
            </Subtitle2>
            <Subtitle3 style={{marginLeft:`1rem`, textAlign: "justify", lineHeight: "1.5", fontWeight: 300 }}>
              <FormattedMessage id='page.forget.password.ledger-hardware-wallet-para' />
            </Subtitle3>
          </YAxis>
          <YAxis>
            <Subtitle2 style={{
              marginTop: "20px",
              marginBottom: "5px",
              fontWeight: "bold",
              textAlign: "left"
            }}>
              <FormattedMessage id='page.forget.password.sign-in-google-title' />
            </Subtitle2>
            <Subtitle3 style={{marginLeft:`1rem`, textAlign: "justify", lineHeight: "1.5", fontWeight: 300 }}>
              <FormattedMessage id='page.forget.password.sign-in-google-para' />
            </Subtitle3>
          </YAxis>
        </Stack>
      </Box>
    </HeaderLayout>
  )
}

export default ForgetPassword
