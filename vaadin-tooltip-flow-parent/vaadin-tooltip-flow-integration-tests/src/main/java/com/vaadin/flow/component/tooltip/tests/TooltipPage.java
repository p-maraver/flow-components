/*
 * Copyright 2000-2022 Vaadin Ltd.
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
package com.vaadin.flow.component.tooltip.tests;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.Input;
import com.vaadin.flow.component.tooltip.Tooltip;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.html.NativeButton;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.component.shared.HasTooltip;

@Route("vaadin-tooltip")
public class TooltipPage extends HorizontalLayout {

    public TooltipPage() {

        // Show after 1 second
        Tooltip.setDefaultTooltipDelay(1000);

        // Hide after 0.5 seconds
        Tooltip.setDefaultTooltipCooldown(500);
        
        var userButton = new NativeButton("User");
        Tooltip.forElement(userButton, "View user profile");
        add(userButton);

        var nameInput = new Input();
        Tooltip.forElement(nameInput, "Enter your name");
        add(nameInput);
        
        var hasTooltipHost = new TooltipHost(new Span("Property tooltip"));
        hasTooltipHost.setTooltip("I'm a property tooltip");
        add(hasTooltipHost);

        var lazyContent = new Span("Lazy tooltip (click to add)");
        var lazyTooltipHost = new TooltipHost(lazyContent);
        lazyTooltipHost.getElement().addEventListener("click", e -> {
            lazyTooltipHost.setTooltip("Only shown after first click");
            lazyContent.setText("Lazy (added)");
        });
        
        add(lazyTooltipHost);
    }

    @JsModule("./tooltip-host.js")
    @Tag("tooltip-host")
    static class TooltipHost extends Component implements HasTooltip {
        
        public TooltipHost(Component content) {
            getElement().appendChild(content.getElement());
        }
        
    }

}
