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
package com.vaadin.flow.component.shared;

import com.vaadin.flow.component.HasElement;
import com.vaadin.flow.dom.Element;

/**
 * Mixin interface for components that support a tooltip.
 *
 * @author Vaadin Ltd
 */
public interface HasTooltip extends HasElement {

    /**
     * Sets a tooltip text for the component.
     *
     * @param tooltip
     *                The tooltip text
     */
    default void setTooltip(String tooltip) {
        // Remove the old tooltip if it exists
        getElement().getChildren().forEach(child -> {
            if ("tooltip".equals(child.getAttribute("slot"))) {
                child.removeFromParent();
            }
        });

        var tooltipElement = new Element("vaadin-tooltip");
        tooltipElement.setAttribute("slot", "tooltip");
        tooltipElement.setProperty("text", tooltip);
        getElement().appendChild(tooltipElement);
    }

    /**
     * Gets the tooltip text of the component.
     *
     * @return The tooltip text
     */
    default String getTooltip() {
        var tooltipElement = getElement().getChildren().filter(e -> "tooltip".equals(e.getAttribute("slot"))).findAny();
        return tooltipElement.isPresent() ? tooltipElement.get().getProperty("text") : null;
    }
}
