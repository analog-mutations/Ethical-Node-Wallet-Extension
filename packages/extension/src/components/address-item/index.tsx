import React, { FunctionComponent, useState } from "react";

import { Box } from "../box";
import { Column, Columns } from "../column";
import { Caption1, H5, Subtitle1 } from "../typography";
import { EllipsisIcon, ProfileIcon } from "../icon";
import { FloatingDropdown, FloatingDropdownItem } from "../dropdown";
import { ColorPalette } from "../../styles";
import { Bech32Address } from "@keplr-wallet/cosmos";
import { FormattedMessage, useIntl } from "react-intl";
import { Gutter } from "../gutter";
import { IconButton } from "../icon-button";
import { XAxis, YAxis } from "../axis";
import { useTheme } from "styled-components";

export const AddressItem: FunctionComponent<{
  timestamp?: number;
  name?: string;
  address: string;
  memo?: string;
  isShowMemo?: boolean;
  onClick?: () => void;

  dropdownItems?: FloatingDropdownItem[];
  // true면 border를 추가함.
  highlight?: boolean;
}> = ({
  timestamp,
  name,
  address,
  // memo,
  // isShowMemo,
  onClick,
  dropdownItems,
  highlight,
}) => {
  const intl = useIntl();
  const theme = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [copyAnimation, setCopyAnimation] = useState<boolean>(false);

  return (
    <Box
      style={{
        border: `1px solid ${ColorPalette[`light-border`]}`,
      }}
      padding="0px 1rem"
      backgroundColor={
        theme.mode === "light"
          ? ColorPalette["gray-50"]
          : ColorPalette["transparent"]
      }
      hover={{
        backgroundColor: onClick
          ? theme.mode === "light"
            ? ColorPalette["gray-100"]
            : ColorPalette["light-background"]
          : undefined,
      }}
      borderRadius="0.375rem"
      borderWidth={highlight ? "1px" : undefined}
      borderColor={highlight ? ColorPalette["gray-400"] : undefined}
      cursor={onClick ? "pointer" : undefined}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) {
          onClick();
        }
      }}
    >
      <Columns sum={1} alignY="center">
        <Column weight={1}>
          <YAxis>
            {timestamp ? (
              <React.Fragment>
                <H5
                  style={{
                    color:
                      theme.mode === "light"
                        ? ColorPalette["gray-700"]
                        : ColorPalette["gray-10"],
                  }}
                >
                  <FormattedMessage
                    id="components.address-item.sent-on-date"
                    values={{
                      date: intl.formatDate(new Date(timestamp), {
                        year: "numeric",
                        month: "long",
                        day: "2-digit",
                      }),
                    }}
                  />
                </H5>
                <Gutter size="0.5rem" />
              </React.Fragment>
            ) : null}

            <YAxis>
              <XAxis alignY="center">
                <ProfileIcon
                  width="2rem"
                  height="2rem"
                  color={
                    theme.mode === "light"
                      ? ColorPalette["gray-300"]
                      : ColorPalette["gray-200"]
                  }
                />
                <Gutter size="0.25rem" />

                <div style={{ maxWidth: `145px` }}>
                  <YAxis>
                    {name && (
                      <Subtitle1
                        style={{
                          color:
                            theme.mode === "light"
                              ? ColorPalette["gray-700"]
                              : ColorPalette["gray-10"],
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {name}
                      </Subtitle1>
                    )}
                    <Gutter size="0.25rem" />
                    <Caption1
                      style={{
                        display: `flex`,
                        justifyContent: `left`,
                        alignItems: `center`,
                        color:
                          theme.mode === "light"
                            ? ColorPalette["gray-300"]
                            : ColorPalette["gray-200"],
                      }}
                    >
                      {Bech32Address.shortenAddress(address, 20)}
                    </Caption1>
                  </YAxis>
                </div>
              </XAxis>
              {/* {isShowMemo ? (memo ? (
                  <Body2
                    style={{
                      color:
                        theme.mode === "light"
                          ? ColorPalette["gray-300"]
                          : ColorPalette["gray-200"],
                      width: "15rem",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {memo}
                  </Body2>
                ) : (
                  <Body2
                    style={{
                      color: ColorPalette["gray-300"],
                    }}
                  >
                    <FormattedMessage id="components.address-item.empty-memo" />
                  </Body2>
                )):null} */}
            </YAxis>
            {/* <Gutter size="0.25rem" /> */}
          </YAxis>
        </Column>
        <div
          onClick={() => {
            setCopyAnimation(true);
            setTimeout(() => {
              setCopyAnimation(false);
            }, 550);
            navigator.clipboard.writeText(address);
          }}
          style={{ cursor: `pointer`, scale: `0.4` }}
        >
          {!copyAnimation ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke={
                  theme.mode === "light"
                    ? ColorPalette["gray-200"]
                    : ColorPalette["gray-200"]
                }
                strokeLinecap="round"
                strokeWidth="1.371"
                d="M12 6H7.371C6.614 6 6 6.614 6 7.371V12"
              />
              <rect
                width="5.629"
                height="5.629"
                x="8.186"
                y="8.186"
                stroke={
                  theme.mode === "light"
                    ? ColorPalette["gray-200"]
                    : ColorPalette["gray-200"]
                }
                strokeWidth="1.371"
                rx="0.686"
              />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96">
              <linearGradient id="a" x1=".5" x2=".5" y2="1">
                <stop stopColor="#191919" offset="0" />
                <stop stopColor="#999" offset="1" />
              </linearGradient>
              <linearGradient id="b" x1="1" x2="0" y2="1">
                <stop offset="0" stopColor="#191919" stopOpacity=".9" />
                <stop offset="1" stopColor="#999" stopOpacity=".9" />
              </linearGradient>
              <linearGradient id="c" x1="1" x2="0" y1=".5" y2=".5">
                <stop offset="0" stopColor="#191919" stopOpacity=".8" />
                <stop offset="1" stopColor="#999" stopOpacity=".8" />
              </linearGradient>
              <linearGradient id="d" x1="1" x2="0" y1="1">
                <stop offset="0" stopColor="#191919" stopOpacity=".6" />
                <stop offset="1" stopColor="#999" stopOpacity=".6" />
              </linearGradient>
              <linearGradient id="e" x1=".5" x2=".5" y1="1">
                <stop offset="0" stopColor="#191919" stopOpacity=".5" />
                <stop offset="1" stopColor="#999" stopOpacity=".5" />
              </linearGradient>
              <linearGradient id="f" x2="1" y1="1">
                <stop offset="0" stopColor="#191919" stopOpacity=".4" />
                <stop offset="1" stopColor="#999" stopOpacity=".4" />
              </linearGradient>
              <linearGradient id="g" x2="1" y1=".5" y2=".5">
                <stop offset="0" stopColor="#191919" stopOpacity=".3" />
                <stop offset="1" stopColor="#999" stopOpacity=".3" />
              </linearGradient>
              <linearGradient id="h" x2="1" y2="1">
                <stop offset="0" stopColor="#191919" stopOpacity=".1" />
                <stop offset="1" stopColor="#999" stopOpacity=".1" />
              </linearGradient>
              <g>
                <rect
                  width="10"
                  height="25"
                  x="43"
                  y="4"
                  fill="url(#a)"
                  stroke="#000"
                  ry="5"
                  rx="5"
                />
                <rect
                  width="25"
                  height="10"
                  x="61.4"
                  y="29.6"
                  fill="url(#b)"
                  stroke="#000"
                  ry="5"
                  rx="5"
                  transform="rotate(-45 61.44 34.56)"
                />
                <rect
                  width="25"
                  height="10"
                  x="67"
                  y="43"
                  fill="url(#c)"
                  stroke="#000"
                  ry="5"
                  rx="5"
                />
                <rect
                  width="25"
                  height="10"
                  x="61.4"
                  y="56.4"
                  fill="url(#d)"
                  stroke="#000"
                  ry="5"
                  rx="5"
                  transform="rotate(45 61.44 61.44)"
                />
                <rect
                  width="10"
                  height="25"
                  x="43"
                  y="67"
                  fill="url(#e)"
                  stroke="#000"
                  ry="5"
                  rx="5"
                />
                <rect
                  width="25"
                  height="10"
                  x="9.6"
                  y="56.4"
                  fill="url(#f)"
                  stroke="#000"
                  ry="5"
                  rx="5"
                  transform="rotate(-45 34.56 61.44)"
                />
                <rect
                  width="25"
                  height="10"
                  x="4"
                  y="43"
                  fill="url(#g)"
                  stroke="#000"
                  ry="5"
                  rx="5"
                />
                <rect
                  width="25"
                  height="10"
                  x="9.6"
                  y="29.6"
                  fill="url(#h)"
                  stroke="#000"
                  ry="5"
                  rx="5"
                  transform="rotate(45 34.56 34.56)"
                />
                <animateTransform
                  fill="freeze"
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  from="0 48 48"
                  to="360 48 48"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </g>
            </svg>
          )}
        </div>

        {dropdownItems && dropdownItems.length > 0 ? (
          <FloatingDropdown
            isOpen={isMenuOpen}
            close={() => setIsMenuOpen(false)}
            items={dropdownItems}
          >
            <IconButton
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              color={
                theme.mode === "light"
                  ? ColorPalette["gray-300"]
                  : ColorPalette["gray-10"]
              }
            >
              <EllipsisIcon width="1.5rem" height="1.5rem" />
            </IconButton>
          </FloatingDropdown>
        ) : null}
      </Columns>
    </Box>
  );
};
