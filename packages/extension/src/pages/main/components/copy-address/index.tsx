import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { ColorPalette } from "../../../../styles";
import { Caption1 } from "../../../../components/typography";
import { CopyOutlineIcon } from "../../../../components/icon";
import { XAxis, YAxis } from "../../../../components/axis";
import { Gutter } from "../../../../components/gutter";
import { Skeleton } from "../../../../components/skeleton";
import { FormattedMessage } from "react-intl";

export const CopyAddressRadius = "8px";

const Styles = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: all 0.3s ease-out;
    padding: 3.5px 0.5rem;
    border: 1px solid ${ColorPalette["light-border"]};

    background-color: ${(props) =>
      props.theme.mode === "light"
        ? ColorPalette["gray-50"]
        : ColorPalette["input-bg"]};
    border-radius: ${CopyAddressRadius};

    cursor: pointer;

    color:  ${(props) =>
      props.theme.mode === "light"
        ? ColorPalette["gray-400"]
        : ColorPalette["gray-100"]};

    :hover {
      background-color: ${(props) =>
        props.theme.mode === "light"
          ? ColorPalette["gray-50"]
          : ColorPalette["transparent"]};

      color: ${(props) =>
        props.theme.mode === "light"
          ? ColorPalette["gray-600"]
          : ColorPalette["pink-300"]};

      border: 1px solid ${ColorPalette["pink-300"]};
    }

    user-select: none;
  `,
};

export const CopyAddress: FunctionComponent<{
  onClick: () => void;
  isNotReady?: boolean;
}> = ({ onClick, isNotReady }) => {
  return (
    <YAxis alignX="center">
      <XAxis alignY="center">
        <Skeleton type="copyAddress" isNotReady={isNotReady}>
          <Styles.Container onClick={onClick}>
            <Caption1>
              <FormattedMessage id="page.main.components.copy-address.title" />
            </Caption1>
            <Gutter size="2px" />
            <CopyOutlineIcon width="1rem" height="1rem" />
          </Styles.Container>
        </Skeleton>
      </XAxis>
    </YAxis>
  );
};
