import Editor from './editor';

import beforeInput, { StringToTypeMap } from './util/beforeinput';
import RenderMap from './util/rendermap';
import keyBindingFn from './util/keybinding';
import customStyleMap from './util/customstylemap';

import createEditorState from './model/content';

import Link, { findLinkEntities } from './components/entities/link';
import rendererFn from './components/customrenderer';
import QuoteCaptionBlock from './components/blocks/blockquotecaption';
import CaptionBlock from './components/blocks/caption';
import AtomicBlock from './components/blocks/atomic';
import TodoBlock from './components/blocks/todo';
import ImageBlock from './components/blocks/image';
import BreakBlock from './components/blocks/break';
import ImageSideButton from './components/sides/image';
import BreakSideButton from './components/sides/break';

import defaultHandlers from './handlers/';
import createEditor from './createEditor';

export { Block, Inline, Entity, HANDLED, NOT_HANDLED } from './util/constants';
export { BLOCK_BUTTONS, INLINE_BUTTONS } from './components/toolbar';

export {
  getDefaultBlockData,
  getCurrentBlock,
  addNewBlock,
  resetBlockWithType,
  updateDataOfBlock,
  addNewBlockAt,
} from './model';

// eslint-disable-next-line no-undef
// export const _version = __VERSION__;

export {
  Editor,
  createEditor,
  beforeInput,
  StringToTypeMap,
  Link,
  findLinkEntities,
  RenderMap,
  keyBindingFn,
  rendererFn,
  customStyleMap,
  createEditorState,
  QuoteCaptionBlock,
  CaptionBlock,
  AtomicBlock,
  TodoBlock,
  ImageBlock,
  BreakBlock,
  ImageSideButton,
  BreakSideButton,
  defaultHandlers,
};

export default Editor;