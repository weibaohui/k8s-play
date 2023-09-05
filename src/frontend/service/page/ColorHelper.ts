import { random } from 'lodash'

export class ColorHelper {
  static colors = [
    '#ff7875',
    '#ff4d4f',
    '#f5222d',
    '#cf1322',
    '#a8071a',
    '#820014',
    '#5c0011',
    '#ff9c6e',
    '#ff7a45',
    '#fa541c',
    '#d4380d',
    '#ad2102',
    '#871400',
    '#610b00',
    '#ffc069',
    '#ffa940',
    '#fa8c16',
    '#d46b08',
    '#ad4e00',
    '#873800',
    '#612500',
    '#ffc53d',
    '#faad14',
    '#d48806',
    '#ad6800',
    '#874d00',
    '#613400',
    '#fadb14',
    '#d4b106',
    '#ad8b00',
    '#876800',
    '#614700',
    '#bae637',
    '#a0d911',
    '#7cb305',
    '#5b8c00',
    '#3f6600',
    '#254000',
    '#95de64',
    '#73d13d',
    '#52c41a',
    '#389e0d',
    '#237804',
    '#135200',
    '#092b00',
    '#36cfc9',
    '#13c2c2',
    '#08979c',
    '#006d75',
    '#00474f',
    '#002329',
    '#69b1ff',
    '#4096ff',
    '#1677ff',
    '#0958d9',
    '#003eb3',
    '#002c8c',
    '#001d66',
    '#85a5ff',
    '#597ef7',
    '#2f54eb',
    '#1d39c4',
    '#10239e',
    '#061178',
    '#030852',
    '#b37feb',
    '#9254de',
    '#722ed1',
    '#531dab',
    '#391085',
    '#22075e',
    '#120338',
    '#f759ab',
    '#eb2f96',
    '#c41d7f',
    '#9e1068',
    '#780650',
    '#520339']

  static randomColor() {
    const key = random(0, this.colors.length)
    return this.colors[key]
  }
}
