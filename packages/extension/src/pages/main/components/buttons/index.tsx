import React, { FunctionComponent, useMemo } from "react";
import { Column, Columns } from "../../../../components/column";
import { Button } from "../../../../components/button";
import { Box } from "../../../../components/box";
import { useNavigate } from "react-router";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../stores";
import { Dec } from "@keplr-wallet/unit";
import { Skeleton } from "../../../../components/skeleton";
import { useIntl } from "react-intl";

export const Buttons: FunctionComponent<{
  onClickDeposit: () => void;
  onClickBuy: () => void;
  isNotReady?: boolean;
}> = observer(({ onClickDeposit, onClickBuy, isNotReady }) => {
  const { hugeQueriesStore } = useStore();
  const navigate = useNavigate();
  const intl = useIntl();

  const balances = hugeQueriesStore.getAllBalances(true);
  const hasBalance = useMemo(() => {
    return balances.find((bal) => bal.token.toDec().gt(new Dec(0))) != null;
  }, [balances]);

  return (
    <Box
      style={{
        position: `absolute`,
        bottom: `15px`,
        left: `50%`,
        translate: `-50%`,
        width: `90%`,
      }}
    >
      <Columns sum={1} gutter="0.625rem">
        <Column weight={1}>
          <Skeleton type="button" isNotReady={isNotReady}>
            <Button
              text={intl.formatMessage({
                id: "page.main.components.buttons.deposit-button",
              })}
              color="secondary"
              onClick={onClickDeposit}
            />
          </Skeleton>
        </Column>

        <Column weight={1}>
          <Skeleton type="button" isNotReady={isNotReady}>
            <Button
              text={intl.formatMessage({
                id: "page.main.components.buttons.buy-button",
              })}
              color="secondary"
              onClick={onClickBuy}
            />
          </Skeleton>
        </Column>

        <Column weight={1}>
          <Skeleton type="button" isNotReady={isNotReady}>
            <Button
              text={intl.formatMessage({
                id: "page.main.components.buttons.send-button",
              })}
              disabled={!hasBalance}
              color="primary"
              onClick={() => navigate("/send/select-asset")}
            />
          </Skeleton>
        </Column>
      </Columns>
    </Box>
  );
});
