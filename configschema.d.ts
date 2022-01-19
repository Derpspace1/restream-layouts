/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface Configschema {
  twitch: {
    enable: boolean;
    chatBot: boolean;
  };
  discord: {
    test: boolean;
    token: string;
    serverID: string;
    commandChannelID: string;
    voiceChannelID: string;
    ignoredUsers?: string[];
  };
  discordSunshine: {
    serverID: string;
    commandChannelID: string;
    voiceChannelID: string;
  };
  discordSA2: {
    serverID: string;
    commandChannelID: string;
    voiceChannelID: string;
  };
  obs: {
    enable: boolean;
    address: string;
    password: string;
    discordAudio: string;
    mpdAudio: string;
    streamsAudio: string;
  };
  mpd?: {
    enable: boolean;
    address: string;
    port: number;
  };
  twitchPubSub?: {
    clientID: string;
    clientSecret: string;
    accessToken: string;
    hostName: string;
    eventSubListenerKey: string;
  };
  [k: string]: unknown;
}
