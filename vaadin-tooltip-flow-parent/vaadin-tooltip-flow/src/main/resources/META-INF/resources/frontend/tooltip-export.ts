import { Tooltip } from './tooltip';

// Declare that window has a property Vaadin

const wnd = window as any;
wnd.Vaadin ||= {};
wnd.Vaadin.Tooltip ||= {};

wnd.Vaadin.Tooltip.setDefaultTooltipDelay = (value: number) => {
    Tooltip.setDefaultTooltipDelay(value);
};

wnd.Vaadin.Tooltip.setDefaultTooltipCooldown = (value: number) => {
    Tooltip.setDefaultTooltipCooldown(value);
};