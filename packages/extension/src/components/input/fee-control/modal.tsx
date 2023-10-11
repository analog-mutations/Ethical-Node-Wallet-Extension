import React, { FunctionComponent } from "react";
import { Caption1, Caption2, H5, Subtitle1, Subtitle3 } from "../../typography";
import { ColorPalette } from "../../../styles";
import styled, { useTheme } from "styled-components";
import { Stack } from "../../stack";
import { Dropdown } from "../../dropdown";
import { Column, Columns } from "../../column";
import { Toggle } from "../../toggle";
import { TextInput } from "..";
import { Button } from "../../button";
import { observer } from "mobx-react-lite";
import {
  IFeeConfig,
  IGasConfig,
  IGasSimulator,
  ISenderConfig,
} from "@keplr-wallet/hooks";
import { useStore } from "../../../stores";
import { GuideBox } from "../../guide-box";
import { Dec } from "@keplr-wallet/unit";
import { Box } from "../../box";
import { FormattedMessage, useIntl } from "react-intl";

const Styles = {
  Container: styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    padding: 1.25rem;
    gap: 0.75rem;

    background: ${(props) =>
      props.theme.mode === "light"
        ? ColorPalette.white
        : ColorPalette["dark-bg-gradient"]};
  `,
  Divider: styled.div`
    border-bottom: 1px solid
      ${(props) =>
        props.theme.mode === "light"
          ? ColorPalette["gray-100"]
          : ColorPalette["gray-500"]};
  `,
};

export const TransactionFeeModal: FunctionComponent<{
  close: () => void;

  senderConfig: ISenderConfig;
  feeConfig: IFeeConfig;
  gasConfig: IGasConfig;
  gasSimulator?: IGasSimulator;
}> = observer(({ close, senderConfig, feeConfig, gasConfig, gasSimulator }) => {
  const { queriesStore } = useStore();
  const intl = useIntl();
  const theme = useTheme();

  const isGasSimulatorUsable = (() => {
    if (!gasSimulator) {
      return false;
    }

    if (gasSimulator.gasEstimated == null && gasSimulator.uiProperties.error) {
      return false;
    }

    return true;
  })();
  const isGasSimulatorEnabled = (() => {
    if (!isGasSimulatorUsable) {
      return false;
    }
    return gasSimulator?.enabled;
  })();

  return (
    <Styles.Container>
      <Subtitle1 style={{ marginBottom: "1.5rem" }}>
        <FormattedMessage id="components.input.fee-control.modal.title" />
      </Subtitle1>

      <Stack gutter="0.75rem">
        <Stack gutter="0.375rem">
          <Subtitle3
            color={
              theme.mode === "light"
                ? ColorPalette["gray-400"]
                : ColorPalette["gray-100"]
            }
          >
            <FormattedMessage id="components.input.fee-control.modal.fee-title" />
          </Subtitle3>
          <FeeSelector feeConfig={feeConfig} />
        </Stack>

        <Stack gutter="0.375rem">
          <Dropdown
            label={intl.formatMessage({
              id: "components.input.fee-control.modal.fee-token-dropdown-label",
            })}
            items={feeConfig.selectableFeeCurrencies
              .filter((cur, i) => {
                if (i === 0) {
                  return true;
                }

                const balance = queriesStore
                  .get(feeConfig.chainId)
                  .queryBalances.getQueryBech32Address(senderConfig.sender)
                  .getBalanceFromCurrency(cur);

                return balance.toDec().gt(new Dec(0));
              })
              .map((cur) => {
                return {
                  key: cur.coinMinimalDenom,
                  label: cur.coinDenom,
                };
              })}
            selectedItemKey={feeConfig.fees[0]?.currency.coinMinimalDenom}
            onSelect={(key) => {
              const currency = feeConfig.selectableFeeCurrencies.find(
                (cur) => cur.coinMinimalDenom === key
              );
              if (currency) {
                if (feeConfig.type !== "manual") {
                  feeConfig.setFee({
                    type: feeConfig.type,
                    currency: currency,
                  });
                } else {
                  feeConfig.setFee({
                    type: "average",
                    currency: currency,
                  });
                }
              }
            }}
            size="large"
          />
        </Stack>

        <Styles.Divider />

        <Columns sum={1} alignY="center">
          <Subtitle3 style={{ color: ColorPalette["gray-200"] }}>
            <FormattedMessage id="components.input.fee-control.modal.gas-title" />
          </Subtitle3>

          <Column weight={1} />

          {isGasSimulatorUsable && gasSimulator ? (
            <Columns sum={1} gutter="0.5rem" alignY="center">
              <Subtitle3 color={ColorPalette["gray-200"]}>
                <FormattedMessage id="components.input.fee-control.modal.auto-title" />
              </Subtitle3>
              <Toggle
                isOpen={gasSimulator.enabled}
                setIsOpen={(isOpen) => {
                  gasSimulator?.setEnabled(isOpen);
                }}
              />
            </Columns>
          ) : null}
        </Columns>

        {(() => {
          if (gasSimulator) {
            if (gasSimulator.uiProperties.error) {
              return (
                <GuideBox
                  color="danger"
                  title={intl.formatMessage({
                    id: "components.input.fee-control.modal.guide-title",
                  })}
                  paragraph={
                    gasSimulator.uiProperties.error.message ||
                    gasSimulator.uiProperties.error.toString()
                  }
                />
              );
            }

            if (gasSimulator.uiProperties.warning) {
              return (
                <GuideBox
                  color="warning"
                  title={intl.formatMessage({
                    id: "components.input.fee-control.modal.guide-title",
                  })}
                  paragraph={
                    gasSimulator.uiProperties.warning.message ||
                    gasSimulator.uiProperties.warning.toString()
                  }
                />
              );
            }
          }
        })()}

        {isGasSimulatorEnabled ? (
          <TextInput
            label={intl.formatMessage({
              id: "components.input.fee-control.modal.gas-adjustment-label",
            })}
            value={gasSimulator?.gasAdjustmentValue}
            onChange={(e) => {
              e.preventDefault();

              gasSimulator?.setGasAdjustmentValue(e.target.value);
            }}
          />
        ) : (
          <TextInput
            label={intl.formatMessage({
              id: "components.input.fee-control.modal.gas-amount-label",
            })}
            value={gasConfig.value}
            onChange={(e) => {
              e.preventDefault();

              gasConfig.setValue(e.target.value);
            }}
          />
        )}

        <Button
          type="button"
          text={intl.formatMessage({
            id: "button.close",
          })}
          color="secondary"
          size="large"
          onClick={() => {
            close();
          }}
        />
      </Stack>
    </Styles.Container>
  );
});

const FeeSelectorStyle = {
  Item: styled.div<{ selected: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.75rem;

    cursor: pointer;

    background-color: ${({ selected, theme }) =>
      selected
        ? ColorPalette["blue-400"]
        : theme.mode === "light"
        ? ColorPalette["blue-50"]
        : ColorPalette["gray-500"]};
  `,
  Title: styled(H5)<{ selected: boolean }>`
    color: ${({ selected, theme }) =>
      selected
        ? theme.mode === "light"
          ? ColorPalette["gray-50"]
          : ColorPalette["gray-50"]
        : theme.mode === "light"
        ? ColorPalette["blue-400"]
        : ColorPalette["gray-50"]};
  `,
  Price: styled(Caption2)<{ selected: boolean }>`
    white-space: nowrap;
    margin-top: 0.25rem;
    color: ${({ selected, theme }) =>
      selected
        ? ColorPalette["blue-200"]
        : theme.mode === "light"
        ? ColorPalette["blue-500"]
        : ColorPalette["gray-300"]};
  `,
  Amount: styled(Caption1)<{ selected: boolean }>`
    white-space: nowrap;
    margin-top: 0.25rem;
    color: ${({ selected }) =>
      selected ? ColorPalette["blue-100"] : ColorPalette["gray-200"]};
  `,
};

const FeeSelector: FunctionComponent<{
  feeConfig: IFeeConfig;
}> = observer(({ feeConfig }) => {
  const { priceStore } = useStore();
  const theme = useTheme();

  const feeCurrency =
    feeConfig.fees.length > 0
      ? feeConfig.fees[0].currency
      : feeConfig.selectableFeeCurrencies[0];

  if (!feeCurrency) {
    return null;
  }

  return (
    <Columns sum={3}>
      <Column weight={1}>
        <FeeSelectorStyle.Item
          style={{
            borderRadius: "0.5rem 0 0 0.5rem",
            borderRight: `1px solid ${
              theme.mode === "light"
                ? ColorPalette["gray-100"]
                : ColorPalette["gray-400"]
            }`,
          }}
          onClick={() => {
            feeConfig.setFee({
              type: "low",
              currency: feeCurrency,
            });
          }}
          selected={feeConfig.type === "low"}
        >
          {/* 텍스트의 길이 등에 의해서 레이아웃이 변하는걸 막기 위해서 가라로 1px의 너비르 가지는 Box로 감싸준다. */}
          <Box width="1px" alignX="center">
            <FeeSelectorStyle.Title selected={feeConfig.type === "low"}>
              <FormattedMessage id="components.input.fee-control.modal.fee-selector.low" />
            </FeeSelectorStyle.Title>
            {feeCurrency.coinGeckoId ? (
              <FeeSelectorStyle.Price selected={feeConfig.type === "low"}>
                {priceStore
                  .calculatePrice(
                    feeConfig.getFeeTypePrettyForFeeCurrency(feeCurrency, "low")
                  )
                  ?.toString() || "-"}
              </FeeSelectorStyle.Price>
            ) : null}
            <FeeSelectorStyle.Amount selected={feeConfig.type === "low"}>
              {feeConfig
                .getFeeTypePrettyForFeeCurrency(feeCurrency, "low")
                .maxDecimals(6)
                .inequalitySymbol(true)
                .trim(true)
                .hideIBCMetadata(true)
                .toString()}
            </FeeSelectorStyle.Amount>
          </Box>
        </FeeSelectorStyle.Item>
      </Column>

      <Column weight={1}>
        <FeeSelectorStyle.Item
          onClick={() => {
            feeConfig.setFee({
              type: "average",
              currency: feeCurrency,
            });
          }}
          selected={feeConfig.type === "average"}
        >
          {/* 텍스트의 길이 등에 의해서 레이아웃이 변하는걸 막기 위해서 가라로 1px의 너비르 가지는 Box로 감싸준다. */}
          <Box width="1px" alignX="center">
            <FeeSelectorStyle.Title selected={feeConfig.type === "average"}>
              <FormattedMessage id="components.input.fee-control.modal.fee-selector.average" />
            </FeeSelectorStyle.Title>
            {feeCurrency.coinGeckoId ? (
              <FeeSelectorStyle.Price selected={feeConfig.type === "average"}>
                {priceStore
                  .calculatePrice(
                    feeConfig.getFeeTypePrettyForFeeCurrency(
                      feeCurrency,
                      "average"
                    )
                  )
                  ?.toString() || "-"}
              </FeeSelectorStyle.Price>
            ) : null}
            <FeeSelectorStyle.Amount selected={feeConfig.type === "average"}>
              {feeConfig
                .getFeeTypePrettyForFeeCurrency(feeCurrency, "average")
                .maxDecimals(6)
                .inequalitySymbol(true)
                .trim(true)
                .hideIBCMetadata(true)
                .toString()}
            </FeeSelectorStyle.Amount>
          </Box>
        </FeeSelectorStyle.Item>
      </Column>

      <Column weight={1}>
        <FeeSelectorStyle.Item
          style={{
            borderRadius: "0 0.5rem 0.5rem 0",
            borderLeft: `1px solid ${
              theme.mode === "light"
                ? ColorPalette["gray-100"]
                : ColorPalette["gray-400"]
            }`,
          }}
          onClick={() => {
            feeConfig.setFee({
              type: "high",
              currency: feeCurrency,
            });
          }}
          selected={feeConfig.type === "high"}
        >
          {/* 텍스트의 길이 등에 의해서 레이아웃이 변하는걸 막기 위해서 가라로 1px의 너비르 가지는 Box로 감싸준다. */}
          <Box width="1px" alignX="center">
            <FeeSelectorStyle.Title selected={feeConfig.type === "high"}>
              <FormattedMessage id="components.input.fee-control.modal.fee-selector.high" />
            </FeeSelectorStyle.Title>
            {feeCurrency.coinGeckoId ? (
              <FeeSelectorStyle.Price selected={feeConfig.type === "high"}>
                {priceStore
                  .calculatePrice(
                    feeConfig.getFeeTypePrettyForFeeCurrency(
                      feeCurrency,
                      "high"
                    )
                  )
                  ?.toString() || "-"}
              </FeeSelectorStyle.Price>
            ) : null}
            <FeeSelectorStyle.Amount selected={feeConfig.type === "high"}>
              {feeConfig
                .getFeeTypePrettyForFeeCurrency(feeCurrency, "high")
                .maxDecimals(6)
                .inequalitySymbol(true)
                .trim(true)
                .hideIBCMetadata(true)
                .toString()}
            </FeeSelectorStyle.Amount>
          </Box>
        </FeeSelectorStyle.Item>
      </Column>
    </Columns>
  );
});
