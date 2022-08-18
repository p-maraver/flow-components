/*
 * Copyright 2022 Vaadin Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

package com.vaadin.flow.component.tooltip;

import java.util.UUID;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.HasSize;
import com.vaadin.flow.component.HasStyle;
import com.vaadin.flow.component.HasTheme;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.UI;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.dependency.NpmPackage;

/**
 * 
 * @author Vaadin Ltd.
 */
@Tag("vaadin-tooltip")
// @JsModule("@vaadin/tooltip/src/vaadin-tooltip.js")
// @NpmPackage(value = "@vaadin/vaadin-tooltip", version = "23.2.0-alpha6")

// PROTO MODULES
@JsModule("./tooltip-export.ts")
@JsModule("./tooltip/vaadin-tooltip.js")
@NpmPackage(value = "@vaadin/vaadin-overlay", version = "23.2.0-alpha6")
@NpmPackage(value = "@vaadin/component-base", version = "23.2.0-alpha6")
@NpmPackage(value = "@vaadin/vaadin-lumo-styles", version = "23.2.0-alpha6")
@NpmPackage(value = "@vaadin/vaadin-themable-mixin", version = "23.2.0-alpha6")
public class Tooltip extends Component {

    public Tooltip(Component target, String text) {
        getElement().setProperty("text", text);
        getElement().getNode().runWhenAttached(ui ->
            ui.getPage().executeJs("$0.target = $1;", getElement(), target.getElement()));
    }

    public static Tooltip forElement(Component target, String text) {
        Tooltip tooltip = new Tooltip(target, text);
        target.addAttachListener(e -> UI.getCurrent().getElement().appendChild(tooltip.getElement()));
        target.addDetachListener(e -> tooltip.getElement().removeFromParent());
        return tooltip;
    }

    public static void setDefaultTooltipDelay(int millis) {
        UI.getCurrent().getPage().executeJs("window.Vaadin.Tooltip.setDefaultTooltipDelay($0);", millis);
    }

    public static void setDefaultTooltipCooldown(int millis) {
        UI.getCurrent().getPage().executeJs("window.Vaadin.Tooltip.setDefaultTooltipCooldown($0);", millis);
    }


}
