import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { TextInput } from "../../components/input";
import { observer } from "mobx-react-lite";
import { useStore } from "../../stores";
import { Button } from "../../components/button";
import { useInteractionInfo } from "../../hooks";
import { Gutter } from "../../components/gutter";
import { Box } from "../../components/box";
import { TextButton } from "../../components/button-text";
import { ColorPalette } from "../../styles";
import { H1, Subtitle4 } from "../../components/typography";
import { Tooltip } from "../../components/tooltip";
import AnimLogo from "../../public/assets/lottie/unlock/logo.json";
import AnimLogoLight from "../../public/assets/lottie/unlock/logo-light.json";
import lottie, { AnimationItem } from "lottie-web";
import { GuideBox } from "../../components/guide-box";
import { LoadingIcon } from "../../components/icon";
import { XAxis } from "../../components/axis";
import { autorun } from "mobx";
import { FormattedMessage, useIntl } from "react-intl";
import { useTheme } from "styled-components";
import { useNavigate } from "react-router";

const svgContent = `
<svg width="12rem" height="9.5rem" viewBox="0 0 3000 3000" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect x="35" y="35" width="2930" height="2930" rx="594" fill="#031426" stroke="#55CED1" stroke-width="70"/>
<rect x="460" y="619" width="2081" height="1762" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_27_277" transform="matrix(0.00840909 0 0 0.00993385 -0.80787 -4.01368e-05)"/>
</pattern>
<image id="image0_27_277" width="313" height="172" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
`;

export const UnlockPage: FunctionComponent = observer(() => {
  const { keyRingStore, interactionStore } = useStore();
  const intl = useIntl();
  const theme = useTheme();

  const [isStartWithMigrating] = useState(() => keyRingStore.isMigrating);
  useEffect(() => {
    // 계정이 많으면 migration이 오래 걸릴 수 있다.
    // 이걸 못 참고 유저가 UI를 끄고 다시 킬수도 있기 때문에
    // migration이 진행 중이라는 것에 대해서 우선적으로 UI를 처리해준다.
    // 근데 이건 view에서만 처리해주고...
    // background와의 통신이 단방향이기 때문에 migration이 끝났을 때 무슨 행동을 취하기가 어렵다.
    // 어쨋든 이런 상황은 거의 발생하지 않기 때문에
    // mobx를 통해서 추적하고 migration이 끝나면 그냥 window를 close한다.
    if (isStartWithMigrating) {
      autorun(() => {
        if (!keyRingStore.isMigrating) {
          window.close();
        }
      });
    }
  }, [isStartWithMigrating, keyRingStore.isMigrating]);

  const interactionInfo = useInteractionInfo(() => {
    interactionStore.rejectAll("unlock");
  });
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>();

  const [isMigrationSecondPhase, setIsMigrationSecondPhase] = useState(false);
  // 유저가 enter를 누르고 처리하는 딜레이 동안 키보드를 또 누를수도 있다...
  // 그 경우를 위해서 따로 state를 관리한다.
  const [migrationSecondPhasePassword, setMigrationSecondPhasePassword] =
    useState("");

  const animContainerRef = useRef<HTMLDivElement | null>(null);
  const animRef = useRef<AnimationItem | null>(null);
  useEffect(() => {
    if (animContainerRef.current) {
      const anim = lottie.loadAnimation({
        container: animContainerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: false,
        animationData: theme.mode === "light" ? AnimLogoLight : AnimLogo,
      });

      animRef.current = anim;

      return () => {
        anim.destroy();

        animRef.current = null;
      };
    }
  }, []);

  const animLoading = isLoading || keyRingStore.isMigrating;
  useEffect(() => {
    // 현실적으로는 이 애니메이션은 마이그레이션 과정 중에서만 보이고 그게 의도이다.
    if (animRef.current) {
      if (animLoading) {
        animRef.current.goToAndPlay(0);
      } else {
        // page가 넘어가기 직전에 애니메이션이 멈추지 않도록 약간의 delay를 준다.
        setTimeout(() => {
          animRef.current?.goToAndStop(0);
        }, 50);
      }
    }
  }, [animLoading]);

  const tryUnlock = async (password: string) => {
    try {
      setIsLoading(true);

      await keyRingStore.unlock(password);

      if (interactionInfo.interaction) {
        // Approve all waiting interaction for the enabling key ring.
        const interactions = interactionStore.getAllData("unlock");
        await interactionStore.approveWithProceedNextV2(
          interactions.map((interaction) => interaction.id),
          {},
          (proceedNext) => {
            if (
              interactionInfo.interaction &&
              !interactionInfo.interactionInternal
            ) {
              if (!proceedNext) {
                window.close();
              }
            }
          }
        );
      }

      setError(undefined);
    } catch (e) {
      console.log(e);
      setError(e);

      // 사실 migration이 오류로 실패하면 이미 답이 없는 상황임...
      setIsMigrationSecondPhase(false);
      setMigrationSecondPhasePassword("");
    } finally {
      setIsLoading(false);
    }
  };
  const navigate = useNavigate();
  return (
    <Box height="100vh" paddingX="1.5rem">
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (isMigrationSecondPhase) {
            // Migration은 enter를 눌러서 진행할 수 없고 명시적으로 버튼을 눌러야한다.
            // 근데 사실 migration 버튼은 type이 button이라 onSubmit이 발생할일은 없음.
            return;
          }

          if (keyRingStore.needMigration) {
            try {
              setIsLoading(true);

              await keyRingStore.checkLegacyKeyRingPassword(password);
              setIsMigrationSecondPhase(true);
              setMigrationSecondPhasePassword(password);

              setError(undefined);
            } catch (e) {
              console.log(e);
              setError(e);
            } finally {
              setIsLoading(false);
            }
          } else {
            await tryUnlock(password);
          }
        }}
      >
        <Box alignX="center">
          <Gutter size="3rem" />

          {/* 
          <div
            ref={animContainerRef}
            style={{
              width: "12rem",
              height: "9.5rem",
            }}
          /> 
          */}

        {/* <div dangerouslySetInnerHTML={{ __html: svgContent }} /> */}


        </Box>

        <ParagraphSection
          needMigration={keyRingStore.needMigration}
          isMigrationSecondPhase={
            isMigrationSecondPhase || keyRingStore.isMigrating
          }
        />

        <BottomFormSection
          password={password}
          setPassword={setPassword}
          error={error}
          setError={setError}
          isMigrationSecondPhase={
            isMigrationSecondPhase || keyRingStore.isMigrating
          }
        />

        {(() => {
          if (isMigrationSecondPhase || keyRingStore.isMigrating) {
            // keyRingStore.isMigrating은 migration을 누르고 UI을 껏다 켰을때 여전히 진행 중일 가능성이 있다.
            // 그러므로 keyRingStore.isMigrating 처리에 우선권이 있어야한다는 점을 주의해야한다.
            return (
              <Box position="relative">
                <Button
                  type="button"
                  text={intl.formatMessage({
                    id: "page.unlock.star-migration-button",
                  })}
                  size="large"
                  disabled={keyRingStore.isMigrating}
                  style={{
                    opacity: keyRingStore.isMigrating ? 0 : 1,
                  }}
                  isLoading={isLoading}
                  onClick={() => {
                    tryUnlock(migrationSecondPhasePassword);
                  }}
                />

                {keyRingStore.isMigrating ? (
                  <Box
                    position="absolute"
                    style={{
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                    }}
                    alignX="center"
                    alignY="center"
                  >
                    <XAxis alignY="center">
                      <Subtitle4
                        color={
                          theme.mode === "light"
                            ? ColorPalette["gray-300"]
                            : ColorPalette["gray-200"]
                        }
                      >
                        <FormattedMessage id="page.unlock.upgrade-in-progress" />
                      </Subtitle4>
                      <Gutter size="0.5rem" />
                      <LoadingIcon
                        color={ColorPalette["gray-200"]}
                        width="1.5rem"
                        height="1.5rem"
                      />
                    </XAxis>
                  </Box>
                ) : null}
              </Box>
            );
          }

          return (
            <Button
              type="submit"
              text={intl.formatMessage({ id: "page.unlock.unlock-button" })}
              size="large"
              color="secondary"
              disabled={password.length === 0}
              isLoading={
                isLoading ||
                (() => {
                  if (interactionInfo.interaction) {
                    const interactions = interactionStore.getAllData("unlock");
                    for (const interaction of interactions) {
                      if (
                        interactionStore.isObsoleteInteraction(interaction.id)
                      ) {
                        return true;
                      }
                    }
                  }
                  return false;
                })()
              }
            />
          );
        })()}

        <Gutter size="3.125rem" />

        {!isMigrationSecondPhase && !keyRingStore.isMigrating ? (
          <TextButton
            text={intl.formatMessage({
              id: "page.unlock.forgot-password-button",
            })}
            type="button"
            size="small"
            color="faint"
            onClick={() => {
              // browser.tabs.create({
              //   url: `https://help.keplr.app/faq?tab=3&topic=5`,
              // });
              navigate("/forgetpassword")
            }}
            style={{ width: "100%", color: ColorPalette["gray-300"] }}
          />
        ) : null}
      </form>
    </Box>
  );
});

const ParagraphSection: FunctionComponent<{
  needMigration: boolean;
  isMigrationSecondPhase: boolean;
}> = ({ needMigration, isMigrationSecondPhase }) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box
        minHeight={needMigration ? "5rem" : "3.5rem"}
        alignX="center"
        alignY="center"
        style={{
          textAlign: "center",
        }}
      >
        {needMigration ? (
          <React.Fragment>
            <H1
              color={
                theme.mode === "light"
                  ? ColorPalette["gray-700"]
                  : ColorPalette["white"]
              }
            >
              <FormattedMessage id="page.unlock.paragraph-section.keplr-here" />
            </H1>
            <Gutter size="0.75rem" />
            <Subtitle4
              color={ColorPalette["gray-200"]}
              style={{
                opacity: isMigrationSecondPhase ? 0 : 1,
              }}
            >
              <FormattedMessage id="page.unlock.paragraph-section.enter-password-to-upgrade" />
            </Subtitle4>

            {/* 대충 위치를 맞추기 위해서 밑에 대충 뭐를 채운다 */}
            <Gutter size="1.25rem" />
          </React.Fragment>
        ) : (
          <>
          <H1
            color={
              theme.mode === "light"
                ? ColorPalette["gray-700"]
                : ColorPalette["white"]
            }
          >
            <FormattedMessage id="page.unlock.paragraph-section.welcome-back" />
          </H1>
          </>
        )}
        <Gutter size="3rem" />
        <div dangerouslySetInnerHTML={{ __html: svgContent }} />
        <Gutter size="3rem" />
      </Box>
    </React.Fragment>
  );
};

const BottomFormSection: FunctionComponent<{
  password: string;
  setPassword: (password: string) => void;
  error: Error | undefined;
  setError: (error: Error | undefined) => void;

  // Migration second phase면 text input을 감추고 guide box를 띄워준다.
  isMigrationSecondPhase: boolean;
}> = ({ password, setPassword, error, setError, isMigrationSecondPhase }) => {
  const intl = useIntl();
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      // Focus the input element at start.
      inputRef.current.focus();
    }
  }, []);

  const [isOnCapsLock, setIsOnCapsLock] = useState(false);

  return (
    <React.Fragment>
      <Box position="relative" width="100%">
        <Box
          position="absolute"
          alignY="center"
          style={{
            top: 0,
            left: 20,
            bottom: 0,
          }}
        >
          <Tooltip
            content={
              <div style={{ whiteSpace: "nowrap" }}>
                <FormattedMessage id="page.unlock.bottom-section.capslock-tooltip" />
              </div>
            }
            enabled={false}
            isAlwaysOpen={isOnCapsLock}
          >
            <div />
          </Tooltip>
        </Box>

        <Gutter size="0.75rem" />
        <Box position="relative">
          <TextInput
            disabled={isMigrationSecondPhase}
            style={{
              opacity: isMigrationSecondPhase ? 0 : 1,
            }}
            ref={inputRef}
            label={intl.formatMessage({
              id: "page.unlock.bottom-section.password-input-label",
            })}
            type="password"
            value={password}
            onChange={(e) => {
              e.preventDefault();

              setPassword(e.target.value);

              // Clear error if the user is typing.
              setError(undefined);
            }}
            onBlur={() => {
              setIsOnCapsLock(false);
            }}
            onKeyUp={(e) => {
              if (e.getModifierState("CapsLock")) {
                setIsOnCapsLock(true);
              } else {
                setIsOnCapsLock(false);
              }
            }}
            onKeyDown={(e) => {
              if (e.getModifierState("CapsLock")) {
                setIsOnCapsLock(true);
              } else {
                setIsOnCapsLock(false);
              }
            }}
            error={
              error
                ? intl.formatMessage({ id: "error.invalid-password" })
                : undefined
            }
          />

          {/*
            Second phase에서는 layout을 바꾸지 않으면서 guide box를 띄워야한다...
            그래서 상위에 relative를 주고 text input은 유저에게만 안보이게 만든다음 absolute로 그린다.
           */}
          {isMigrationSecondPhase ? (
            <Box
              position="absolute"
              style={{
                left: 0,
                right: 0,
                bottom: 0,
              }}
            >
              <GuideBox
                color="warning"
                title={intl.formatMessage({
                  id: "page.unlock.bottom-section.guide-title",
                })}
                paragraph={intl.formatMessage({
                  id: "page.unlock.bottom-section.guide-paragraph",
                })}
              />
            </Box>
          ) : null}
        </Box>
      </Box>

      <Gutter size="2.125rem" />
    </React.Fragment>
  );
};
